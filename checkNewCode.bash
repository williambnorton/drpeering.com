#!/bin/bash

FILE=newCode.semaphore

if [ -f $FILE ]; then
   echo "File $FILE exists."
	git pull https://github.com/williambnorton/drpeering.com.git
	rm $FILE
fi
