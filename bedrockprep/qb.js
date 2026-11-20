(function () {
  var problems = window.BEDROCK_125 || [];

  var domains = [];
  problems.forEach(function (p) {
    if (!domains.some(function (d) { return d.id === p.domain; })) {
      domains.push({ id: p.domain, name: p.domainName });
    }
  });

  var domainFilterEl = document.getElementById("domain-filters");
  domains.forEach(function (d) {
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.className = "f-domain";
    input.value = d.id;
    input.checked = true;
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + d.name));
    domainFilterEl.appendChild(label);
  });

  var grid = document.getElementById("qb-grid");
  var countEl = document.getElementById("qb-count");

  function render() {
    var checkedDifficulty = Array.prototype.map.call(
      document.querySelectorAll(".f-difficulty:checked"),
      function (el) { return el.value; }
    );
    var checkedDomain = Array.prototype.map.call(
      document.querySelectorAll(".f-domain:checked"),
      function (el) { return el.value; }
    );

    var filtered = problems.filter(function (p) {
      return checkedDifficulty.indexOf(p.difficulty) !== -1 &&
        checkedDomain.indexOf(p.domain) !== -1;
    });

    countEl.textContent = filtered.length + " of " + problems.length + " problem types";

    grid.innerHTML = "";
    filtered.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "qb-card";
      a.href = "problems/template.html?id=" + encodeURIComponent(p.id) +
        "&number=" + encodeURIComponent(p.number) +
        "&name=" + encodeURIComponent(p.name) +
        "&difficulty=" + encodeURIComponent(p.difficulty) +
        "&topic=" + encodeURIComponent(p.topicName) +
        "&domain=" + encodeURIComponent(p.domainName);

      var top = document.createElement("div");
      top.className = "qb-card-top";
      var num = document.createElement("span");
      num.className = "num";
      num.textContent = "#" + p.number;
      var badge = document.createElement("span");
      badge.className = "qb-badge badge-" + p.difficulty;
      badge.textContent = p.difficulty;
      top.appendChild(num);
      top.appendChild(badge);

      var name = document.createElement("p");
      name.className = "name";
      name.textContent = p.name;

      var topic = document.createElement("p");
      topic.className = "topic";
      topic.textContent = p.domainName + " → " + p.topicName;

      a.appendChild(top);
      a.appendChild(name);
      a.appendChild(topic);
      grid.appendChild(a);
    });
  }

  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("f-difficulty") || e.target.classList.contains("f-domain")) {
      render();
    }
  });

  document.getElementById("reset-filters").addEventListener("click", function () {
    document.querySelectorAll(".f-difficulty, .f-domain").forEach(function (el) {
      el.checked = true;
    });
    render();
  });

  render();
})();
