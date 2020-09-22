current_dir := $(shell pwd)
.PHONY: build

build:
	sudo docker build -t front -f dev.Dockerfile .

.PHONY: run

run:
	sudo docker run --rm -p 4200:4200 -it -v $(current_dir):/app -v /app/node_modules front 

.PHONY: dev

dev:
	sudo docker build -t front -f dev.Dockerfile . && sudo docker run --rm -p 4200:4200 -it front