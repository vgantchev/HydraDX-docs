---
id: slashing 
title: Slashing
---

Slashing is a process where a validator pool (consisting of a validator and its active nominations) is punished for behaving in a way which is detrimental to the stability of the network. Examples of such misbehavior range between unintended node downtime and deliberate network attacks. When slashing occurs, the validator pool loses (a portion of) its active stake which is transferred to the Treasury as a penalty. Slashing leads to a loss of staked funds both for the validator and for all its active nominations in the era when the slashing has occured.

Slashing penalties are definied as a percentage of the active stake of the validator pool. The harshness of the penalty is determined by the severity of the offence. Currently, there are four levels of offences:

* Level 1: **0.1%** penalty (max)
These are minor, unintentional offences which

* Level 2: **1%** penalty (max)
* Level 3: **10%** penalty (max)
* Level 4: **100%** penalty (max)



However, the validator will be forced to **chill**, meaning that it will be removed from the active set and have all of its *nominations removed*.

1. Misconducts which eventually will happen to many validators - max penalty **0.1%**  
An example of such non-critical offences is isolated unresponsiveness. This occurs when a node belonging to the active validator set goes offline for an entire epoch (4hr)

2.




There are several factors which determine the harshness of slashing. As a general rule, larger validator pools with a relatively higher active stake will be slashed more harshly as compared to smaller validator pools. This rule incentivizes large validators to meet all necessary measures for guaranteeing the stability of their nodes. It also makes newcomers more attractive to nominate, thereby increasing their chances to enter the active validator set.

The seriousness of the offence is the second central factor which influences the slashing penalty.

Another important factor is the seriousness of the offence.

 stimulates nominators to stake their tokens with smaller vali


The severity of the punishment depends on the seriousnes of the misbehaviour.
