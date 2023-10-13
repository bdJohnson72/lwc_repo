/**
 * Created by bjohnson on 5/5/23.
 */

import {LightningElement, track} from 'lwc';
import AlarmClockImage from '@salesforce/resourceUrl/alarm_clock_image';
import AlarmClockSound from '@salesforce/resourceUrl/Alarm_Clock_Sound'

export default class AlarmClock extends LightningElement {
    clockImage = AlarmClockImage;
    currentTime = '';
    hours = [];
    minutes = [];
    meridiem = ['AM', 'PM'];
    hourSelected = '';
    minuteSelected = '';
    meridiemSelected = '';
    alarmTime = '';
    isAlarmSet = false;
    isAlarmTriggered = false;

    connectedCallback() {
        this.currentTimeHandler();
    }

    currentTimeHandler() {
        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            let second = dateTime.getSeconds();
            let ampm = 'AM';
            if(hour == 0){
                hour = 12
            } else if(hour >=12){
                hour = hour - 12
                ampm = 'PM'
            }

            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;

            this.currentTime = `${hour}:${minute}:${second} ${ampm}`
            console.log(this.alarmTime, this.currentTime)
            if (this.alarmTime === `${hour}:${minute} ${ampm}`) {
                console.log('Alarm')
                this.isAlarmTriggered = true;
                let audio = new Audio(AlarmClockSound);
                audio.play();
            }
        }, 1000);
        this.createHoursOptions();
        this.createMinutesOptions();
    }

    createHoursOptions() {
        for (let i = 1; i < 12; i++) {

            let val = i < 10 ? `0${i}` : i;
            this.hours = [...this.hours, val];
        }
    }

    createMinutesOptions() {
        for (let i = 1; i < 60; i++) {
            let val = i < 10 ? `0${i}` : i;
            this.minutes = [...this.minutes, val];
        }
    }

    changeOptionHandler(event) {
        let label = event.detail.label;
        let value = event.detail.value;
        if (label === 'Hour') {
            this.hourSelected = value;
        } else if (label === 'Minute') {
            this.minuteSelected = value;
        } else if (label === 'AM/PM') {
            this.meridiemSelected = value;
        }
    }

    get buttonDisabled() {
        return !(this.hourSelected && this.minuteSelected && this.meridiemSelected);
    }

    setAlarm(){
        this.alarmTime = `${this.hourSelected}:${this.minuteSelected} ${this.meridiemSelected}`;
        this.isAlarmSet = true;
    }

    clearAlarm(){
        this.alarmTime = '';
        this.isAlarmSet = false;
        this.hourSelected = '';
        this.minuteSelected = '';
        this.meridiemSelected = '';
        this.isAlarmTriggered = false;
        //stop alarm sound
        let audio = new Audio(AlarmClockSound);
        audio.pause();
        const elements = this.template.querySelectorAll('c-drop-down');
        Array.from(elements).forEach(element => {
            element.reset('');
        })
    }

    get shakeAlarm(){
        return this.isAlarmTriggered ? 'shake' : '';
    }
}