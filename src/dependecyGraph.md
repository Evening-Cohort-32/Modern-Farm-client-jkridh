```mermaid
graph TD;
    main.js-->plan.js;
    main.js-->catalog.js;
    main.js-->harvester.js;
    catalog.js-->harvester.js;
    harvester.js-->tractor.js;
    harvester.js-->seeds;
    tractor.js-->field.js;
    tractor.js-->seeds;
    field.js-->seeds;


```
