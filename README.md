![banner](https://github.com/MariusLang/node-red-contrib-feiertage-germany/blob/master/img/feiertage_banner_de.svg)
# Node Red Feiertage Germany

[![NPM](https://img.shields.io/npm/v/node-red-contrib-feiertage-germany)](https://www.npmjs.com/package/node-red-contrib-feiertage-germany)
[![NPM_downloads](https://img.shields.io/npm/dm/node-red-contrib-feiertage-germany)](https://www.npmjs.com/package/node-red-contrib-feiertage-germany)
[![issues](https://img.shields.io/github/issues/mariuslang/node-red-contrib-feiertage-germany)](https://github.com/MariusLang/node-red-contrib-germany/issues)

[![NPM](https://nodei.co/npm/node-red-contrib-feiertage-germany.png?compact=true)](https://nodei.co/npm/node-red-contrib-feiertage-germany/)

The Node Red **Feiertage Germany** node is the ultimative node to get informations about german holidays.

Is there any holiday missing? Write an issue! I'm going to add this holiday for you.

This node was splitted out of the [node-red-contrib-feiertage node](https://github.com/MariusLang/node-red-contrib-feiertage). This Node only contains **German** holidays.
To get this node for an other country read the point below.

## You're living in Germany, Austria or Switzerland?

country | node-red node
--- | ---
Germany | [node-red-contrib-feiertage-germany](https://github.com/MariusLang/node-red-contrib-feiertage)
Austria | [node-red-contrib-feiertage-austria](https://github.com/MariusLang/node-red-contrib-feiertage-austria)
Switzerland | [node-red-contrib-feiertage-switzerland](https://github.com/MariusLang/node-red-contrib-feiertage-austria)
Or you want all in one node (Germany, Austria, Switzerland) | [node-red-contrib-feiertage](https://github.com/MariusLang/node-red-contrib-feiertage)

## Installation
```
npm install node-red-contrib-feiertage-germany
```

## Getting Started
At first, it's important to check that you have picked the rigth localisation and timezone on your device. Below you can find a manual how to change those settings on to a RaspberryPi.

Login into your Pi. Then open the settings with this command.

```
sudo raspi-config
```

Now you should see this interface. Navigate to **5 Localisation Options** and press ENTER.

![pi_settings_1](https://github.com/MariusLang/node-red-contrib-feiertage-germany/blob/master/img/pi_settings_1.PNG)

Here you can set your **Local** and **Timezone**.
If your localisation is Germany chose **de_DE.UTF-8** as your local and **Europe** --> **Berlin** as your timezone.

![pi_settings_2](https://github.com/MariusLang/node-red-contrib-feiertage-germany/blob/master/img/pi_settings_2.PNG)

After you have finished setup click **Finish**.
To  make your changes valid reboot your pi.

```
sudo reboot
```

## Node Description

### Input
The input can be used to trigger special outputs. The keywords are listed below.

keyoword | output
--- | ---
isTodayHoliday | boolean wether today is holiday
nextHoliday | information about next holiday
nextThreeHolidays | informations about next 3 holidays
all | informations about all holidays

### Output
The output can be used to listen to automatic and user triggered events. Every day at 00:01 o'clock the node automaticly outputs a boolean value wether today is a holiday.

Holidays are always listed into an array[3].

index | output
--- | ---
0 | identifier
1 | name
2 | date (yyyy-mm-dd)
3 | german date (dd.mm.yyyy)

### Own Holidays
You can chose up to 10 own dates. Select the **day** in the first dropdown-menu and the **month** in the second. Chose a name for your holiday and type it into the input field. Don't forget to hit the checkbox to enable your own holiday. Pay attention: The node does NOT validate your own dates. So if you set the 30 febrary or the 31 april as date you wont't get an error message.

![own_holiday_example](https://github.com/MariusLang/node-red-contrib-feiertage-germany/blob/master/img/own_holiday_example.PNG)

## Example Flow
You can import this example into your Node Red flow.

![flow_example](https://github.com/MariusLang/node-red-contrib-feiertage-germany/blob/master/img/flow_example.PNG)

```
[{"id":"6fcba4fe.4427cc","type":"inject","z":"f250d57e.bf23e8","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"nextHoliday","payloadType":"str","x":270,"y":180,"wires":[["c5428b48.697978"]]},{"id":"71a2802f.2b76e","type":"debug","z":"f250d57e.bf23e8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":660,"y":200,"wires":[]},{"id":"6a07b5d.895004c","type":"inject","z":"f250d57e.bf23e8","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"isTodayHoliday","payloadType":"str","x":260,"y":140,"wires":[["c5428b48.697978"]]},{"id":"e34ede47.a55998","type":"inject","z":"f250d57e.bf23e8","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"nextThreeHolidays","payloadType":"str","x":250,"y":220,"wires":[["c5428b48.697978"]]},{"id":"c1e2557c.f9be9","type":"inject","z":"f250d57e.bf23e8","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"all","payloadType":"str","x":290,"y":260,"wires":[["c5428b48.697978"]]},{"id":"c5428b48.697978","type":"feiertage","z":"f250d57e.bf23e8","name":"Feiertage","neujahr":true,"heiligeDreiKoenige":true,"weiberfastnacht":true,"valentinstag":true,"rosenmontag":true,"fastnachtsdienstag":true,"aschermittwoch":true,"gruendonnerstag":true,"karfreitag":true,"easterSunday":true,"easterMonday":true,"christiHimmelfahrt":true,"pfingstsonntag":true,"pfingstmontag":true,"fronleichnam":true,"mariaHimmelfahrt":true,"tagDerDeutschenEinheit":true,"halloween":true,"allerheiligen":true,"stMartin":true,"bussUndBettag":true,"nikolaus":true,"advent1":true,"advent2":true,"advent3":true,"advent4":true,"heiligabend":true,"weihnachten1":true,"weihnachten2":true,"silvester":true,"ownHoliday1":true,"ownHoliday1Day":"16","ownHoliday1Month":"5","ownHoliday1Name":"my birthday","ownHoliday2":false,"ownHoliday2Day":2,"ownHoliday2Month":2,"ownHoliday2Name":"own Date 2","ownHoliday3":false,"ownHoliday3Day":3,"ownHoliday3Month":3,"ownHoliday3Name":"own Date 3","ownHoliday4":false,"ownHoliday4Day":4,"ownHoliday4Month":4,"ownHoliday4Name":"own Date 4","ownHoliday5":false,"ownHoliday5Day":5,"ownHoliday5Month":5,"ownHoliday5Name":"own Date 5","ownHoliday6":false,"ownHoliday6Day":6,"ownHoliday6Month":6,"ownHoliday6Name":"own Date 6","ownHoliday7":false,"ownHoliday7Day":7,"ownHoliday7Month":7,"ownHoliday7Name":"own Date 7","ownHoliday8":false,"ownHoliday8Day":8,"ownHoliday8Month":8,"ownHoliday8Name":"own Date 8","ownHoliday9":false,"ownHoliday9Day":9,"ownHoliday9Month":9,"ownHoliday9Name":"own Date 9","ownHoliday10":false,"ownHoliday10Day":10,"ownHoliday10Month":10,"ownHoliday10Name":"own Date 10","x":480,"y":200,"wires":[["71a2802f.2b76e"]]}]
```