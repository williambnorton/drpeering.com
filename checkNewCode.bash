#!/bin/bash

FILE=drpeering.com/newCode.semaphore

if [ -f $FILE ]; then
   echo "File $FILE exists."
	#git pull https://github.com/williambnorton/drpeering.com.git
	git pull https://github.com/williambnorton/drpeering.com.git
	rm $FILE
fi
