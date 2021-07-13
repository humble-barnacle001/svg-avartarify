# [SVG Avatarify](https://github.com/humble-barnacle001/svg-avatarify)

A simple but highly customisable API endpoint to provide a SVG for the name or initials which shall serve as an avatar.

## How to use

An SVG image is returned for each request to [https://svg-avatarify.vercel.app/api/generator](https://svg-avatarify.vercel.app/api/generator). The following customisation options are available:

| option       | description                                                                                                                                                                                              | example code                                                                          | demo                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`       | Name of the user -> first & last name's initials are extracted                                                                                                                                           | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify                   | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=40)                          |
| `initials`   | Initials passed directly. When present, `name` query parameter is ignored                                                                                                                                | https://svg-avatarify.vercel.app/api/generator?initials=SA                            | ![](https://svg-avatarify.vercel.app/api/generator?initials=SA&dim=40)                                   |
| `background` | Background of the image. Pass a valid hex color value without `#`. If absent a random color out of a list is chosen                                                                                      | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&background=567890 | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&background=567890&dim=40)        |
| `color`      | Color of the initials on the icon. Pass a valid hex color value without `#`. `Default:fff`                                                                                                               | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&color=333         | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&color=333&background=ccc&dim=40) |
| `dim`        | Dimensions of the image in `pixels`. `Default:50`                                                                                                                                                        | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=40            | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=40)                          |
| `fontSize`   | Font size of the text in `pixels`. `Default:set by dim parameter = dim/2`                                                                                                                                | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&fontSize=25       | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&fontSize=25&dim=40)              |
| `case`       | Case of the initials. Available: `0, 2`. If parameter is unused, the initials are captilaised. If `case` parameter is used, `0: no change`, `2: lower case` & if unknown value is passed default is `0`. | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&case=2            | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&case=2&dim=40)                   |
| `bold`       | If set to true, produces a bold text with `font-weight:700`. `Default:false`                                                                                                                             | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&bold=true         | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&bold=true&dim=40)                |
| `rounded`    | Number of `pixels` to round at corners. `Default:0`                                                                                                                                                      | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&rounded=10        | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&rounded=10&dim=40)               |
| `isRounded`  | Set to `true` if circle icon is required. **It is ignored when `rounded` parameter is present**. `Default: false`                                                                                        | https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&isRounded=true    | ![](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&isRounded=true&dim=40)           |

## Demo

    https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100

![1](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100)

    https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&rounded=10

![2](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&rounded=10)

    https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&isRounded=true&bold=true

![3](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&isRounded=true&bold=true)

    https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&isRounded=true&background=fe2&color=333

![3](https://svg-avatarify.vercel.app/api/generator?name=SVG%20Avatarify&dim=100&isRounded=true&background=fe2&color=333)

## List of colors present - which shall result from random

![](https://via.placeholder.com/150x40/E284B3/FFFFFF/?text=E284B3)
![](https://via.placeholder.com/150x40/FFED8B/333333/?text=FFED8B)
![](https://via.placeholder.com/150x40/681313/FFFFFF/?text=681313)
![](https://via.placeholder.com/150x40/F3C1C6/333333/?text=F3C1C6)
![](https://via.placeholder.com/150x40/735372/FFFFFF/?text=735372)
![](https://via.placeholder.com/150x40/009975/FFFFFF/?text=009975)
![](https://via.placeholder.com/150x40/FFBD39/FFFFFF/?text=FFBD39)
![](https://via.placeholder.com/150x40/B1E8ED/333333/?text=B1E8ED)
![](https://via.placeholder.com/150x40/52437B/FFFFFF/?text=52437B)
![](https://via.placeholder.com/150x40/F76262/FFFFFF/?text=F76262)
![](https://via.placeholder.com/150x40/216583/FFFFFF/?text=216583)
![](https://via.placeholder.com/150x40/293462/FFFFFF/?text=293462)
![](https://via.placeholder.com/150x40/DD9D52/FFFFFF/?text=DD9D52)
![](https://via.placeholder.com/150x40/936B93/FFFFFF/?text=936B93)
![](https://via.placeholder.com/150x40/6DD38D/FFFFFF/?text=6DD38D)
![](https://via.placeholder.com/150x40/888888/FFFFFF/?text=888888)
![](https://via.placeholder.com/150x40/6F8190/FFFFFF/?text=6F8190)
![](https://via.placeholder.com/150x40/BCA0F0/FFFFFF/?text=BCA0F0)
![](https://via.placeholder.com/150x40/AAF4DD/333333/?text=AAF4DD)
![](https://via.placeholder.com/150x40/96C2ED/FFFFFF/?text=96C2ED)
![](https://via.placeholder.com/150x40/3593CE/FFFFFF/?text=3593CE)
![](https://via.placeholder.com/150x40/5EE2CD/333333/?text=5EE2CD)
![](https://via.placeholder.com/150x40/96366E/FFFFFF/?text=96366E)
![](https://via.placeholder.com/150x40/E38080/FFFFFF/?text=E38080)
