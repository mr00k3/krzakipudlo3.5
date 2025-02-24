onEvent('recipes', event => {
  event.remove({input: 'create:crushed_platinum_ore'})
    event.smelting('pixelmon:platinum_ingot', 'create:crushed_platinum_ore')
    event.blasting('pixelmon:platinum_ingot', 'create:crushed_platinum_ore')
  })
  