# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141026103456) do

  create_table "invoices", force: true do |t|
    t.integer  "total_cost"
    t.date     "date_payable"
    t.boolean  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "libraries", force: true do |t|
    t.integer  "user_id"
    t.integer  "song_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "songs", force: true do |t|
    t.string   "title"
    t.string   "artist"
    t.string   "album"
    t.integer  "year"
    t.string   "genre"
    t.date     "last_played"
    t.date     "last_download"
    t.integer  "total_plays"
    t.integer  "total_downloads"
    t.string   "song_path"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "file"
    t.string   "art"
  end

  create_table "transactions", force: true do |t|
    t.string   "sk_song"
    t.date     "date"
    t.integer  "cost"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "password"
    t.string   "email"
    t.string   "address_line_1"
    t.string   "address_line_2"
    t.string   "address_line_3"
    t.string   "postcode"
    t.string   "phone"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.string   "date_of_birth"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "permissions"
    t.boolean  "subscribed"
    t.integer  "total_downloads"
    t.integer  "total_listens"
  end

end
