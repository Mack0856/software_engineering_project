class SongUploader < CarrierWave::Uploader::Base
	storage :file

	def store_dir
		"#{Rails.root}/app/assets/music"
	end
end