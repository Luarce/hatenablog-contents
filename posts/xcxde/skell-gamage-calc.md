## ドールダメージ計算 : XenobladeX DE

### 計算式

```plaintext
ダメージ = [( ステータス * ステータスバフ * アーツ倍率 )
            + ( 武器攻撃力 * 安定性 )]
                * 乱数補正
                * 加算ボーナス
                * 部位硬度補正
                * 属性耐性補正
```
これをヒット数繰り返す

#### 攻撃力 : AttackStat

格闘力・射撃力・潜在力の部分

```plaintext
ステータス = ( 基礎ステータス + SpecUp-POW )
            * ( 100% + Boost-POW
                    + ドライブ + 心機一体 )
```

- Boost-POW：最大`100%`
- ドライブ：最大`100%`
- 心機一体 Lv5：`14%`

最大`3.14`倍



これらは装備するとステータス画面に即時反映される

#### 攻撃力バフ : AttackBuffTotal


#### アーツ倍率（%） : HitScaling
ドールの各アーツ倍率はゲーム内では確認不可

オートアタックの場合、アーツ倍率は以下のように計算

- ドール格闘AAのアーツ倍率：`100%`
- ドール射撃AAのアーツ倍率：`100% / 弾数`

**Diskbom**に**Custom.WP-MSL-MAG Ⅹ**をつけた場合、  
弾数は**33**発のため、アーツ倍率は約**3**%となる。


#### 武器攻撃力 : WeaponAttack

```plaintext
武器攻撃力 = 基礎武器攻撃力 * ( 100% + WEAPON-POW )
```
**Custom.WEAPON-POW ⅩⅩ**3つで最大2.2倍  
**Drillpile**はアーツ倍率の割に武器攻撃力が低いため、格闘力を盛る方が良い

#### 安定性 : Stability

武器攻撃力に掛かる乱数

武器攻撃力が高い武器は、安定性をあえて下げることで最大ダメージを大きく伸ばせる

#### 乱数補正（％） : Damage fluctuates

```plaintext
乱数補正 = 100% + ( 0% ~ 5% )
```

ダメージ全体に掛かる乱数

#### 加算ボーナス（%） : AdditiveBonuses

```plaintext
加算ボーナス = 100%
            + ElementDmg
            + PositionDmg
            + KillerDmg
            + Start.Arts-Attack
            + 属性攻撃Upバフ
            + アーツ特攻
            + 会心補正
            + その他
```
**ElementDmg**と**Start.Arts-Attack**で盛ることで大きくダメージを伸ばせる

擬態している敵は範囲アーツで巻き込むか、**KillerDmg**が有効

会心補正はここに加算されるだけなので、他のゼノブレイドシリーズに比べて重要度は低い

- 基礎会心補正：`25%`
- 基礎会心確率：`5%`

#### 部位硬度補正（%） : AppendageHardness
```plaintext
部位硬度補正 = 100% + ダメージ減衰
```
敵の各部位には部位硬度が設定されている

部位硬度に対応するダメージ減衰は以下の通り

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

##### 属性耐性補正 : AttributeResistanceTotal

```plaintext
属性耐性補正 = 100% + 敵属性耐性 + 耐性ダウン
```


### 参考

1. https://www.xenoserieswiki.org/wiki/Damage_(XCX)
1. https://www.xenoserieswiki.org/wiki/Auto-attack_(XCX)
1. https://www.xenoserieswiki.org/wiki/Custom.WP-MSL-MAG
1. https://www.xenoserieswiki.org/wiki/Appendage


<style>
@import url("../../assets/css/hatena-design.css");
</style>
