.PHONY: help pull push

help:
	@echo 'Targets:'
	@echo '  push:   push files to the website; overwrites remote changes'
	@echo '  pull:   pull files from the website; overwrites local changes'

push:
	rsync -av --exclude='.hg' --exclude='.git' --exclude=".DS_Store" --exclude='Makefile' ./ melez.com:public_html/mykzilla/

pull:
	rsync -av melez.com:public_html/mykzilla/ ./
