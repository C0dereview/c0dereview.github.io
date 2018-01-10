---
layout: post
title:  "Publishing content on c0dereview"
date:   2018-01-10 16:30:00 +0100
author: David Granström
categories: tutorial
tags: c0dereview tutorial
---

This post contains step-by-step instructions on how to submit new content to this website. You will need some experience with `git`, but you can check out this c0dereview [tutorial on git]({{ site.url }}/tutorial/2018/01/09/git-part-1) if you need to refresh your memory or learn the basics.

## Step 1

Log in to [github.com](https://github.com) with your user.

Go to the [c0dereview github repository](https://github.com/C0dereview/c0dereview.github.io).

## Step 2

Click the **fork** button found in the right side of the page.

You will now have a personal fork of the website on your github profile.

## Step 3

Go to your github profile and find the forked repository.

Clone the fork to your local machine.

* Click the **Clone or download** button to get the url.

Open up a terminal and type `git clone ` and paste in the url.

The command should look something like: `git clone https://github.com/C0dereview/c0dereview.github.io.git`

## Step 4

Check out a new branch and name it `post/<title>`

Here' an example.

```shell
git checkout -b post/test-post
```

Subsitute *test-post* with the title of your post (it doesn't matter if you change the title of your actual post later).

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
git push origin post/test-post
```

Open your web browser and navigate to your fork on github.

Switch to your new branch in the dropdown menu on the left (it should say: Branch master)

Click on the button that says **Create Pull Request**.

All done! Thanks for contributing to c0dereview ^_^
