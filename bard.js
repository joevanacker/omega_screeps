const monologue = 'How oft when men are at the point of death Have they been merry, which their keepers call A lightning before death! Oh, how may I Call this a lightning?—O my love, my wife! Death, that hath sucked the honey of thy breath,Hath had no power yet upon thy beauty. Thou art not conquered. Beauty’s ensign yet Is crimson in thy lips and in thy cheeks, And death’s pale flag is not advancèd there.— Tybalt, liest thou there in thy bloody sheet? O, what more favor can I do to thee, Than with that hand that cut thy youth in twain To sunder his that was thine enemy? Forgive me, cousin.—Ah, dear Juliet, Why art thou yet so fair? Shall I believe That unsubstantial death is amorous, And that the lean abhorrèd monster keeps Thee here in dark to be his paramour? For fear of that, I still will stay with thee, And never from this palace of dim night Depart again. Here, here will I remain With worms that are thy chamber maids. Oh, here Will I set up my everlasting rest, And shake the yoke of inauspicious stars From this world-wearied flesh. Eyes, look your last. Arms, take your last embrace. And, lips, O you The doors of breath, seal with a righteous kiss A dateless bargain to engrossing death. Come, bitter conduct, come, unsavoury guide. Thou desperate pilot, now at once run on The dashing rocks thy seasick, weary bark. Here’s to my love! (drinks the poison) O true apothecary, Thy drugs are quick. Thus with a kiss I die.';

let char = 0;

module.exports.loop = function () {
    for (const i in Game.spawns) {
        Game.spawns[i].createCreep([RANGED_ATTACK, MOVE], 'Romeo');
    }

    for (const i in Game.creeps) {
        Game.creeps[i].say(monologue.substring(char));
        char += 10;

        if (char >= monologue.length) {
            Game.creeps[i].suicide();
        }
    }
};
