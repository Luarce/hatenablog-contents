const main = () => {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
};


function calcAttackGroup(
  AttackStat: number, // ステータス
  AttackBuffTotal: number, // バフ
  HitScaling: number, // アーツ倍率
  WeaponAttack: number, // 武器攻撃力
  Stability: number, // 安定性
  Defence: number, // 防御力
){
  const attackGroup:number = (AttackStat * AttackBuffTotal * HitScaling)
                            + (WeaponAttack * Stability)
                            - Defence;
  return attackGroup;
}


function xcxInnerDamageCalc(
  ){




  }




main();

