# GameOfLife
A simple implementation of the famous Game of Life.

**TODOs**: More seeds, easy seed-maker mode, maybe user-submitting of seeds (requires db). More UI functionality.
Bruteforce run through tons of possible seeds in a stats view? Halts automatically at repetition (detect also same pattern but translated). Optional coloring of new alive cells for one generation. Make grid infinite, automatically zoom to see all or manually zoom.

Possible approach for endless field and better performance: store alive cells as x/y-key in a hashmap (just keys are enough though), put 0/0 at the centre. Upon dead the entry gets deleted from the hashmap. Track top-leftest and bottom-rightest alive cell to auto-zoom the view.
