# PPW Intelligent Building Blocks

A MakeCode extensions for PPW intelligent building blocks.

## Basic usage

### C32 Ultrasonic Distance module

#### ping
This package contains a ``ping`` block that can return the distance to an bostacle detected by the ultrasonic.

```blocks
ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
```

#### Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your C32 Ultrasonic Distance.

```blocks
basic.forever(() => {
    let p = ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
    led.plotBarGraph(p, 0);
})
```
------

### C33 IR Receiver

#### Connect

Connects to the C33 IR Receiver module at the specified pin.

```blocks
ppw.connectIrReceiver(DigitalPin.P1)
```

#### irButton

Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.

```sig
ppw.irButton()
```

#### onIrDatagram

Do something when a specific button is pressed or released on the remote control.

```sig
ppw.onIrDatagram(() => {})
```

#### irDatagram

Returns the IR datagram as 32-bit hexadecimal string. The last received datagram is returned or "0x00000000" if no data has been received yet.

```sig
ppw.irDatagram()
```

#### wasIrDataReceived

Returns true if any IR data was received since the last call of this function. False otherwise.

```sig
ppw.wasIrDataReceived();
```

#### irButtonCode

Returns the command code of a specific IR button.

```sig
ppw.irButtonCode(IrButton.Num9)
```

#### MakeCode Example

```blocks

ppw.connectIrReceiver(DigitalPin.P1)

basic.forever(function () {
    if (ppw.wasAnyIrButtonPressed()) {
        basic.showNumber(ppw.irButton())
    }
})

ppw.onIrButton(IrButton.OK, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})

ppw.onIrButton(IrButton.OK, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
```
------

### C81 OLED

#### Wiring Diagram
![C81 wiring Diagram](https://github.com/thireyes/pxt-pinpinwa/blob/master/c81wiring.png)

#### Blocks

##### Initialize C81 OLED Display

Sets up the OLED display and prepares it for use by the micro:bit, this block must be placed before any of the ``show`` blocks.

```sig
OLED.init(64, 128);
```










## License

MIT

## Supported targets

* for PXT/microbit

