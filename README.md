# PPW Intelligent Building Blocks

A MakeCode extensions for PPW intelligent building blocks.


## C32 Ultrasonic Distance module

### Wiring Diagram
![C32 wiring Diagram](https://github.com/thireyes/pxt-pinpinwa/blob/master/c32wiring.png)

### ping
This package contains a ``ping`` block that can return the distance to an bostacle detected by the ultrasonic.

```blocks
ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
```

### Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your C32 Ultrasonic Distance.

```blocks
basic.forever(() => {
    let p = ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
    led.plotBarGraph(p, 0);
})
```


## C33 IR Receiver

### Connect

Connects to the C33 IR Receiver module at the specified pin.

```blocks
ppw.connectIrReceiver(DigitalPin.P1)
```

### irButton

Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.

```sig
ppw.irButton()
```

### onIrDatagram

Do something when a specific button is pressed or released on the remote control.

```sig
ppw.onIrDatagram(() => {})
```

### irDatagram

Returns the IR datagram as 32-bit hexadecimal string. The last received datagram is returned or "0x00000000" if no data has been received yet.

```sig
ppw.irDatagram()
```

### wasIrDataReceived

Returns true if any IR data was received since the last call of this function. False otherwise.

```sig
ppw.wasIrDataReceived();
```

### irButtonCode

Returns the command code of a specific IR button.

```sig
ppw.irButtonCode(IrButton.Num9)
```

### MakeCode Example

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


## C81 OLED

### Wiring Diagram
![C81 wiring Diagram](https://github.com/thireyes/pxt-pinpinwa/blob/master/c81wiring.png)


### Initialize C81 OLED Display

Sets up the OLED display and prepares it for use by the micro:bit, this block must be placed before any of the ``show`` blocks.

```sig
ppw.init(64, 128);
```

### Show String Without Newline
Displays a string on the OLED module without a newline.

```sig
ppw.showString1("hello, micro:bit!")
```

### Show String With Newline
Displays a string on the OLED module with a newline.

```sig
ppw.showString2("hello, micro:bit!")
```

### Show Number Without newline
Displays a number on the OLED module without a newline.

```sig
ppw.showNumber1(123)
```

### Show Number With Newline
Displays a number on the OLED module with a newline.

```sig
ppw.showNumber2(123)
```

### Clear Display
Clears the display.

```sig
ppw.clear()
```

### Draw Outlined Rectangle
Displays an outline of a rectangle.

```sig
ppw.drawRectangle(30,30,100,50)
```

### Draw Line
Displays a line.

```sig
ppw.drawLine(20,20,100,50)
```

### Progress bar
Displays a progress bar with a specified percentage of progress.

```sig
ppw.drawLoadingBar(77)
```

### MakeCode Example: Counter
The following code is a simple counter that displays an increasing number every second.

```blocks
ppw.init(64, 128)
let item = 0
basic.forever(() => {
    basic.pause(1000)
    item += 1
    ppw.showNumber(item)
})
```

## C82 Digit Tube

### Wiring Diagram
![C82 wiring Diagram](https://github.com/thireyes/pxt-pinpinwa/blob/master/c82wiring.png)

### Creat
create a TM1637 object

```sig
ppw.create(Digital.Pin14, DigitalPin.P15, 7, 4)
```

### on
turn on the display.

```sig
ppw.on()
```

### off
turn off the display.

```sig
ppw.off()
```

### tmclear
clear content of the display.

```sig
ppw.tmclear()
```

### showbit
show a digit number in given position.

```sig
ppw.showbit(7,2)
```

### showNumber
show a interger number in display.

```sig
ppw.showNumber(1098)
```

### showHex
show a hex number.

```sig
ppw.showHex(1098)
```

### showDP
show or hide dot piont in give bit, bit is dot piont position, [0 - count] show, True will show DP, other will hide it.

```sig
ppw.showDP(2, true)
```

### intensity
set display intensity.

```sig
ppw.intensity(7) 
```





## License

MIT

## Supported targets

* for PXT/microbit


## Footnotes

1.  More information about PPW intelligent electronic building blocks https://www.yuque.com/ppwdocs/en