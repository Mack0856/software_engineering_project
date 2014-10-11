class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :password
      t.string :email
      t.string :address_line_1
      t.string :address_line_2
      t.string :address_line_3
      t.string :postcode
      t.string :phone
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :date_of_birth

      t.timestamps
    end
  end
end
