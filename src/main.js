import { mixed } from "./example/mixed";
import { variable } from "./example/variable";
import { exampleTypeOf } from "./example/exampleTypeOf";
import { exampleLenght } from "./example/exampleLenght";
import { exampleEval } from "./example/exampleEval";

//Welcome Text
document.querySelector("#app").innerHTML =
  '<h1 style="text-align: center;">Hello JavaScript</h1>';

mixed();
variable();
exampleTypeOf();
exampleLenght();
exampleEval();
