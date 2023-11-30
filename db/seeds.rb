Profile.destroy_all

100.times do
  Profile.create!(
    name: Faker::Name.name,
    age: rand(18..65),
    image_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['profile'])
  )
end

puts 'Seeding complete!'

