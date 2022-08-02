# PPW Intelligent Building Blocks

A MakeCode extensions for PPW intelligent building blocks.

## Basic usage

### C32 Ultrasonic Distance module

This package contains a ``ping`` block that can return the distance to an bostacle detected by the ultrasonic.

```sig
ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
```

Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your C32 Ultrasonic Distance.

```blocks
basic.forever(() => {
    let p = ppw.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
    led.plotBarGraph(p, 0);
})
```



## License

MIT

## Supported targets

* for PXT/microbit

