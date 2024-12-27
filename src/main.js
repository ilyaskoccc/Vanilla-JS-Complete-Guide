import { mixed } from "./example/mixed";
import { variable } from "./example/variable";
import { exampleTypeOf } from "./example/exampleTypeOf";
import { exampleLenght } from "./example/exampleLenght";
import { exampleEval } from "./example/exampleEval";
import { exampleTrim } from "./example/exampleTrim";
import { exampleSlice } from "./example/exampleSlice";
import { exampleSubString } from "./example/exampleSubString";
import { exampleSubStr } from "./example/exampleSubStr";
import { exampleConcat } from "./example/exampleConcat";
import { exampleRepeat } from "./example/exampleRepeat";

//Welcome Text
document.querySelector("#app").innerHTML =
  '<h1 style="text-align: center;">Hello JavaScript</h1>';

mixed();
variable();
exampleTypeOf();
exampleLenght();
exampleEval();
exampleTrim();
exampleSlice();
exampleSubString();
exampleSubStr();
exampleConcat();
exampleRepeat();
