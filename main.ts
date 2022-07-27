
// emum for c32 ultrasonic distance bit(comptiable with hc-sr04)

enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}



/**
 * PPW intelligent building blocks utilities
 */

//% weight=10 color=#E94709 icon="\uf52e" block="PPW"

namespace ppw { 

    // *************************** namespace's main blocks *************************** //

    // ***************** block for c32 ultrasonic distance ******* //
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig trig pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=ultrasonic_ping 
    //% block = "ping trig %trig|echo %echo|unit %unit"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.round((d/58)*10)/10;
            case PingUnit.Inches: return Math.round((d/148)*10)/10;
            default: return d ;
        }
    }
}