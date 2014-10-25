class Song < ActiveRecord::Base
	mount_uploader :file, SongUploader
end
