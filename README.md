# gladys-alsamixer

This module allows you to adjust the loudspeaker volume and the microphone sensitivity of Gladys.
Volume increases or decreases in increments of 5%.
It creates a device, so you can control volume level too, mute microphone.


Prerequisites
-------------

- [Gladys](http://gladysassistant.com) 

Manual install
-------------

name : gladys-alsamixer<br>
version : 0.0.2<br>
git : https://github.com/nicoaugereau/gladys-alsamixer.git<br>
slug : alsamixer<br>

Getting started
-------------
The install add 2 parameters :<br>
```
GLADYS_SPEAKER, set to value PCM
GLADYS_MICROPHONE set to value Headset
```
Connect to your raspberry, and type alsamixer command to find your values.<br>
Replace the control values if necessary in the Gladys parameters.<br>

#### Sentences added in the brain :
French sentences examples:<br>
Monte/baisse le volume du haut-parleur<br>
Monte/réduis le volume de ton haut-parleur<br>
Monte/descend le niveau de ton haut-parleur<br>
Mets le volume de ton haut-parleur plus fort<br>
Augmente/diminue le volume de ton haut-parleur<br>
Mets ton haut-parleur plus/moins fort<br>
Mets le volume de ton haut-parleur à X %<br>
Quel est le niveau/niveau du haut-parleur ?<br>
<br>
Monte/baisse la sensibilité du micro<br>
Monte/baisse la sensibilité de ton micro<br>
Mets la sensibilité de ton micro plus forte<br>
Augmente/diminue la sensibilité de ton micro<br>
Mets la sensibilité du micro moins forte<br>
Mets la sensibilité de ton micro à X %<br>
Quel est le niveau/niveau du micro ?<br>
Coupe ton micro<br>


English sentences:<br>
Turn up/down the speaker volume<br>
Put the speaker volume louder/lower<br>
Put your speaker volume louder/lower<br>
Turn up/down your speaker volume<br>
Put X % your speaker volume<br>
<br>
Turn up the mic sensitivity<br>
Put the mic sensitivity louder/lower<br>
Put your mic sensitivity louder/lower<br>
Turn up/down your mic sensitivity<br>
Put X % your mic sensitivity<br>
What is the volume of the speaker?<br>
What is the level of the speaker?<br>
What is the volume of the mic?<br>
What is the level of the mic?<br>
Turn off your microphone<br>

Don't forget to clic on 'Train the brain' after reboot.

####

What is Gladys project
-------------

**Website :** [https://gladysassistant.com](http://gladysassistant.com) <br>
**Community :** [https://community.gladysassistant.com/](https://community.gladysassistant.com/)


TO DO
-------------
- To improve: sentences
- Tune percent volume<br>
