# sequelize model:generate --name types --attributes name:string

# sequelize model:generate --name rarities --attributes name:string

# sequelize model:generate --name arenas \
# --attributes name:string,arenaName:string

# sequelize model:generate --name elixirCosts \
# --attributes name:string

# sequelize model:generate --name cards \
# --attributes name:string,type_id:smallInt,elixir_id:smallInt,rarity_id:smallInt,arena_id:smallInt,summary:text,imgURL:string

# sequelize db:migrate 