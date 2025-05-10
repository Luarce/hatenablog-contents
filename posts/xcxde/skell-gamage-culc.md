## ドールのダメージ計算 | XenobladeX DE

### 計算式
```planetext
ダメージ = [( ステータス * ステータスバフ * アーツ倍率 )
            + ( 武器攻撃力 * 安定性 )]
                * 乱数補正
                * 加算ボーナス
                * 部位硬度補正
                * 属性耐性補正

総ダメージ = ダメージ * ヒット数
```

#### ステータス
```planetext
ステータス = ( 基礎ステータス + SpecUp-〇POW )
            * ( 100% + ○○力ドライブ + Boosts-〇POW + 心機一体 )
            * ( 100% + ○○力アップバフ )
```
- ○○力ドライブ：最大`100%`
- Boosts-〇POW：最大`100%`
- バフ以外はステータス画面に即時反映

#### アーツ倍率（%）
- ドール格闘AAのアーツ倍率：`100%`
- ドール射撃AAのアーツ倍率：`100% / ( 弾数 + MAG )`



#### 武器攻撃力
```planetext
武器攻撃力 = 基礎武器攻撃力 * ( 100% + WEAPON-POW )
            * ( 100% + 安定性 )
```

#### 乱数補正
```planetext
乱数補正 = 100% + ( 0% ~ 5% )
```

#### 加算ボーナス（%）
```planetext
加算ボーナス = 100%
                + ElementDamage + PositionDamage + KillerDamage
                + 属性攻撃Upバフ
                + アーツ特攻
                + ( 会心基礎補正 * 会心ダメージアップ )
```
会心基礎補正：`25%`
会心基礎確率：`5%`

#### 部位硬度補正（%）
```planetext
部位硬度補正 = 100% + ダメージ減衰
```
| 部位硬度 | ダメージ減衰（%） |
| -------- | ----------------- |
| 5        | -85%              |
| 4        | -75%              |
| 3        | -50%              |
| 2        | -25%              |
| 1        | -15%              |
| ±0       | ±0%               |
| -1       | 15%               |
| -2       | 25%               |
| -3       | 50%               |
| -4       | 100%              |
| -5       | 150%              |

- 本体の部位硬度：`±0`

#### ヒット数
```planetext
ヒット数 = 基礎ヒット数 + MAG
```






### 出典
- https://www.xenoserieswiki.org/wiki/Damage_(XCX)
- https://www.xenoserieswiki.org/wiki/Auto-attack_(XCX)
- https://www.xenoserieswiki.org/wiki/Custom.WP-MSL-MAG
- https://www.xenoserieswiki.org/wiki/Appendage
