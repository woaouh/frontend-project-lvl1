# Makefile
install: 
	npm install

brain-games:
	node bin/brain-games.js

brain-even: brain-games
	./bin/brain-even.js

brain-calc: brain-games
	./bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .