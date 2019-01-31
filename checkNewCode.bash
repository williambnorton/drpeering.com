#!/bin/bash
#
#		checkNewCode - reload new web site from github
#			make 1 second granular checks and replaces during dev

FILE=drpeering.com/newCode.semaphore

i=0;
while :
do
if [ -f $FILE ]; then
   echo `date`" File $FILE exists."
	rm -rf drpeering.com
	git clone https://github.com/williambnorton/drpeering.com.git drpeering.com
   echo `date`" NEW DRPEERING.COM."
fi
sleep 1
i=`expr $i + 1`
if [ $i -gt 58 ]; then
	#echo `date` DONE
	exit
fi
done
