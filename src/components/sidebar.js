import React from 'react'

export default function Sidebar() {
  return (
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/emp" class="brand-link">
    <span class="brand-text font-weight-light">DASHBOARD</span>
    </a>

    <div class="sidebar">

    <div class="form-inline">
      <div class="input-group" data-widget="sidebar-search">
        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
        <button class="btn btn-sidebar">
          <i class="fas fa-search fa-fw"></i>
        </button>
        </div>
      </div>
    </div>

    <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

    <li class="nav-item">
        <a href="iframe.html" class="nav-link">
        <i class="nav-icon fas fa-ellipsis-h"></i>
        <p>Employees</p>
        </a>
    </li>
    </ul>
    </nav>
    </div>
</aside>
  )
}
