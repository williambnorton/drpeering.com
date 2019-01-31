#!/bin/bash

FILE=drpeering.com/newCode.semaphore

if [ -f $FILE ]; then
   echo `date`" File $FILE exists."
	mv drpeering.com drpeering.com-
	git clone https://github.com/williambnorton/drpeering.com.git drpeering.com
	#git pull https://github.com/williambnorton/drpeering.com.git
	#git pull https://github.com/williambnorton/drpeering.com.git
	rm $FILE
   echo `date`" NEW DRPEERING.COM."
fi
