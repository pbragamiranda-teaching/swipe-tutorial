class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :age
      t.string :image_url

      t.timestamps
    end
  end
end
