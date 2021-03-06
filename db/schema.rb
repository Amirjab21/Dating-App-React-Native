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

ActiveRecord::Schema.define(version: 20180110194351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "connections", force: :cascade do |t|
    t.integer "user_id",                          null: false
    t.integer "requested_id",                     null: false
    t.string  "status",       default: "Pending", null: false
    t.index ["user_id", "requested_id"], name: "index_connections_on_user_id_and_requested_id", unique: true, using: :btree
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "matchmaker_id", null: false
    t.integer  "recipient_id",  null: false
    t.integer  "suggested_id",  null: false
    t.text     "message"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "profile_images", force: :cascade do |t|
    t.integer  "user_profile_id"
    t.boolean  "main_image",         default: true, null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer  "rater_id",   null: false
    t.integer  "rated_id",   null: false
    t.integer  "rating",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rater_id", "rated_id"], name: "index_ratings_on_rater_id_and_rated_id", unique: true, using: :btree
  end

  create_table "user_profiles", force: :cascade do |t|
    t.integer "user_id",                            null: false
    t.decimal "lat",       precision: 10, scale: 6
    t.decimal "lng",       precision: 10, scale: 6
    t.text    "bio"
    t.string  "work"
    t.string  "education"
  end

  create_table "user_settings", force: :cascade do |t|
    t.integer "user_id",                     null: false
    t.boolean "discoverable", default: true, null: false
    t.boolean "suggestable",  default: true, null: false
    t.boolean "messageable",  default: true, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.integer  "gender",          null: false
    t.date     "birthday",        null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token",   null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
