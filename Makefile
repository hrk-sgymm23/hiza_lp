PHONY: build up build-run

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

exec:
	docker-compose exec app /bin/sh

# ※初回はbuildしない
# docker compose run --rm hiza-lp npx create-next-app@latest .
# make up