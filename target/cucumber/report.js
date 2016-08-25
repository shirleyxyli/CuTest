$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/SecondCase.feature");
formatter.feature({
  "id": "add-more",
  "tags": [
    {
      "name": "@Calculator",
      "line": 1
    }
  ],
  "description": "",
  "name": "add more",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "add-more;add-more",
  "description": "",
  "name": "add more",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "input BaseNum 1",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "start to add",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "the result should be 10",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "SecondCase.InputBase(int)"
});
formatter.result({
  "duration": 99117583,
  "status": "passed"
});
formatter.match({
  "location": "SecondCase.RuAdd()"
});
formatter.result({
  "duration": 611969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 21
    }
  ],
  "location": "SecondCase.GetResult(int)"
});
formatter.result({
  "duration": 1817306,
  "status": "passed"
});
});