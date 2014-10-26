class ReportController < ApplicationController
	def index
		@songs = Song.all
		@users = User.all
	end

	def users
	end

	def songs
	end
end