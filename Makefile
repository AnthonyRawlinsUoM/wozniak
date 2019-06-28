all: build install pull

build:
	npm run-script build
	@docker build --tag=anthonyrawlinsuom/wozniak .

install:
	@docker push anthonyrawlinsuom/wozniak
	
pull:
	@docker pull anthonyrawlinsuom/wozniak

minor:
	./minor.sh

patch:
	./patch.sh

major:
	./major.sh

clean:
	@docker rmi --force anthonyrawlinsuom/wozniak

wozniak:
	npm run-script build
	@docker build --tag=anthonyrawlinsuom/wozniak .
	@docker push anthonyrawlinsuom/wozniak
