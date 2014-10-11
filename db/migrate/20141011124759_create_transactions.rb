class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.string :sk_song
      t.date :date
      t.integer :cost

      t.timestamps
    end
  end
end
