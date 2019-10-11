class CreateBookmarks < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.text :content
      t.text :url

      t.timestamps
    end
  end
end
