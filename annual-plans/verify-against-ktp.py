#!/usr/bin/env python3
"""Check the generated Grade 6, 7 and 9 plans against the official KTP workbooks.

Every national lesson must appear, in the national order, in the national quarter,
with the national number of hours per topic. Cambridge lessons added on top of the
plan (grade 6 only) are excluded from the comparison; Cambridge content placed into
a national slot is not, because the slot is still a national lesson.

Usage:  python3 verify-against-ktp.py <directory holding the four .xls KTP files>
"""
import xlrd, re, io, itertools, sys
SC = sys.argv[1]
def ktp(f):
    sh = xlrd.open_workbook(SC + '/' + f).sheet_by_index(0); out=[]; q=0
    for r in range(sh.nrows):
        vals=[str(sh.cell_value(r,c)).strip() for c in range(sh.ncols)]
        if re.search(r'(I{1,3}V?)\s*ЧЕТВЕРТЬ',' '.join(vals),re.I): q+=1; continue
        if not vals or not re.match(r'^\d+(\.0)?$',vals[0]): continue
        t=re.sub(r'\s+',' ',vals[1]).strip()
        if t: out.append((q,t))
    return out
def mine(md, keep=()):
    rows=[]; q=0
    for line in io.open('/home/user/test1/annual-plans/'+md,encoding='utf-8'):
        if re.match(r'##\s+(I{1,3}V?)\s+QUARTER',line): q+=1; continue
        m=re.match(r'\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(\S*)\s*\|',line)
        if m and q:
            t=m.group(2).strip()
            if keep is not None and m.group(5)=='CAM' and not (keep and t.startswith(keep)): continue
            rows.append((q,t))
    return rows
def blocks(rows): return [(q,t,len(list(g))) for (q,t),g in itertools.groupby(rows)]
fail=0
for f, md, keep in [('g6-math.xls','08-cambridge-class-grade6-mathematics.md',('Think — problem task',)),
                    ('g7-math.xls','09-special-class-mathematics-grade7.md',None),
                    ('g9-alg.xls','10-special-class-algebra-grade9.md',None),
                    ('g9-geo.xls','11-special-class-geometry-grade9.md',None)]:
    k, m = ktp(f), mine(md, keep)
    kb, mb = blocks(k), blocks(m)
    kh, mh = [b[2] for b in kb], [b[2] for b in mb]
    per = all(sum(1 for x in k if x[0]==q) == sum(1 for x in m if x[0]==q) for q in (1,2,3,4))
    ok = (len(k)==len(m)) and kh==mh and per
    if not ok:
        fail+=1
        for i in range(min(len(kh),len(mh))):
            if kh[i]!=mh[i]:
                print('   %s: block %d KTP %dh "%s" | plan %dh "%s"'%(md,i+1,kh[i],kb[i][1][:46],mh[i],mb[i][1][:46])); break
        else: print('   %s: %d vs %d national lessons, %d vs %d blocks'%(md,len(k),len(m),len(kb),len(mb)))
    print('%-42s national %3d/%3d  blocks %3d/%3d  %s'%(md,len(k),len(m),len(kb),len(mb),'OK' if ok else '*** MISMATCH ***'))
sys.exit(1 if fail else 0)
