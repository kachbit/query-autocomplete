# query-autocomplete
reverse engineered google's autocomplete. no api key.<br>
<br>
use the provided ``complete()`` function. Demo:
```js
const result = await complete("how to");
console.log(result); // [ "how to screenshot on windows", "how to screenshot on mac", "how to draw", "how to take a screenshot on windows", "how to screenshot on chromebook", "how to pronounce", "how to make a paper airplane", "how to train your dragon" ]
```
