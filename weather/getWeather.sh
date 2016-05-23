#!/bin/bash          
locality="sydney"
bomURL="http://www.bom.gov.au/nsw/forecasts/"$locality".shtml"

while true; do 
	wget $bomURL -O w.d;
	sleep 3600
done
