#!/bin/bash

FILE=drpeering.com/newCode.semaphore

if [ -f $FILE ]; then
   echo `date`" File $FILE exists."
	rm -rf drpeering.com
	git clone https://github.com/williambnorton/drpeering.com.git drpeering.com
	rm $FILE
   echo `date`" NEW DRPEERING.COM."
fi
