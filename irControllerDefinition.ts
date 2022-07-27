// Definiton of IR Controller's buttons

const enum IrButton {
  //% block="PWR"
  Pwr = 0xa2,
  //% block=" "
  Unused = 0x62,
  //% block="MENU"
  Menu = 0xe2,
  //% block="TEST"
  Test = 0x22,
  //% block="+"
  Plus = 0x02,
  //% block="←"
  Return = 0xc2,
  //% block="⇤"
  Previous = 0xe0,
  //% block="PLAY"
  Play = 0xa8,
  //% block="NEXT"
  Next = 0x90,
  //% block="0"
  Num0 = 0x68,
  //% block="-"
  Minus = 0x98,
  //% block="C"
  Cancle = 0xb0,
  //% block="1"
  Num1 = 0x30,
  //% block="2"
  Num2 = 0x18,
  //% block="3"
  Num3 = 0x7a,
  //% block="4"
  Num4 = 0x10,
  //% block="5"
  Num5 = 0x38,
  //% block="6"
  Num6 = 0x5a,
  //% block="7"
  Num7 = 0x42,
  //% block="8"
  Num8 = 0x4a,
  //% block="9"
  Num9 = 0x52,
  //% block="any"
  Any = -1,
}