Item.defineThrowable(1002,'ender_pearl',0,'Ender Pearl',16);
Player.addItemCreativeInv(1002,1)
Item.setCategory(1002, ItemCategory.FOOD);

function customThrowableHitBlockHook(projectile,itemId, x, y, z, side){
if(itemId == 1002){

Entity.setPosition(Player.getEntity(), x, y + 3, z);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.addParticle(ParticleType.portal,getPlayerX()+Math.random() * 2-1,getPlayerY() +Math.random() * 2-3 ,getPlayerZ()+Math.random() * 2-1,0,2,0,10);
Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "mob.endermen.portal", 100, 0);}}

function deathHook(attacker, victim){

if(Entity.getEntityTypeId(victim) == EntityType.ENDERMAN){
EnderPearl = Level.dropItem(Entity.getX(victim), Entity.getY(victim)+1, Entity.getZ(victim), 0, 1002, 1);}}
