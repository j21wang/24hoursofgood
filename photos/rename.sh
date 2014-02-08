#!/bin/bash
i=1
for file in `ls`
do
	ext=`echo $file | tail -c 4 | head -c 3`
	mv "$file" "${i}.${ext}"
	((i++))
done
