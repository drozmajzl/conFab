class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :track_id
      t.string :comment
      t.integer :likes

      t.timestamps
    end
  end
end
