/**
 * https://wiki.dfrobot.com/sen0539-en/ choose Microbit example
 * 
 * https://wiki.dfrobot.com/sen0539-en/docs/21332 Command words list
 * 
 * https://makecode.microbit.org/_AR6WhrgsDTdC   Demo
 * 
 * C/R -> SCL      D/T -> SDA
 * 
 * https://www.makerguides.com/getting-started-with-gravity-voice-recognition-module/
 */
serial.writeLine("===================")
voiceRecognition.init()
voiceRecognition.setVolume(4)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(20)
serial.writeLine("" + (voiceRecognition.getWakeTime()))
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("=================")
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        serial.writeLine("" + (voiceRecognition.readCMDID()))
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W22)) {
            serial.writeLine("2222222222")
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W62)) {
            basic.showIcon(IconNames.Happy)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W64)) {
            basic.showIcon(IconNames.Heart)
        }
    }
})
