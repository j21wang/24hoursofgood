#!/bin/bash
file="emailSubjectsJS"
i=0
# create an array full of spam emails
while read line
do
	from[${i}]="${line}"
	((i++))
done < spamEmails
i=0

# create spam email objects
echo "var spamEmails = new Array();"> ${file}
while read line
do
	echo "var e_${i} = new Object();" >> ${file}
	echo "e_${i}.from = \"${from[${i}]}\";" >> ${file}
	echo "e_${i}.title = \"${line}\";" >> ${file}
	echo "e_${i}.body = \"${line}\";" >> ${file}
	echo "spamEmails[${i}] = e_${i};" >> ${file}
	((i++))
done < emailSubjects
