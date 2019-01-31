#!/bin/bash
#
#
#		checkNewCode - reload new web site from github

FILE=drpeering.com/newCode.semaphore

if [ -f $FILE ]; then
   echo `date`" File $FILE exists."
	rm -rf drpeering.com
	git clone https://github.com/williambnorton/drpeering.com.git drpeering.com
   echo `date`" NEW DRPEERING.COM."
fi
