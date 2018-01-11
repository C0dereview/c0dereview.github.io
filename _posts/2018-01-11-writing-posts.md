---
layout: post
title:  "Writing posts for c0dereview"
date:   2018-01-11 11:30:00 +0100
author: David Granström
categories: tutorial
tags: c0dereview tutorial
---

This post contains step-by-step instructions on how to create and submit new content to this website. You will need some experience with `git`. You could check out this c0dereview [tutorial on git]({{ site.url }}/tutorial/2018/01/09/git-part-1) if you need to refresh your memory or learn the basics.

The process described below is also very common when contributing to open source projects in general. Just subsitute the c0dereview github repository with whatever project you want to make a contribution to!

## Step 1

Log in to [github.com](https://github.com) with your user.

Go to the [c0dereview github repository](https://github.com/C0dereview/c0dereview.github.io).

## Step 2

Click the **fork** button found in the right side of the page.

You will now have a personal fork of the repository on your github profile.

## Step 3

Go to your github profile and find the forked repository.

Clone the fork to your local machine.

* Click the **Clone or download** button to get the url.

Open up a terminal and `cd` to the directory where you want to store the repository.

Type `git clone ` and paste in the url.

The complete command should look something like: `git clone https://github.com/C0dereview/c0dereview.github.io.git`

## Step 4

Check out a new branch and name it something relevant for your post `my-first-post`

Here's an example.

```shell
git checkout -b my-first-post
```

## Step 5

Create a new markdown file in the `_posts` directory with the content of your post. Look at the previous content to get an idea of the formatting, or read up on how to write posts in the [jekyll documentation](https://jekyllrb.com/docs/posts).

## Step 6

Commit your new post.

```shell
git add _posts/2018-01-09-your-post.md
git commit -m 'Add new post'
```

And push it to your fork.

```
git push origin my-first-post
```

Open your web browser and navigate to your fork on github.

Click on the button that says **Create Pull Request**.

All done! Thanks for contributing to c0dereview ^_^
